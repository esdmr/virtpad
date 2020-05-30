type PromiseLike<T> = T | Promise<T>;
type FuncLike = (...arg: any[]) => any;
type P<T extends FuncLike> = Parameters<T>;
type R<T extends FuncLike> = ReturnType<T>;

export abstract class Task<RF extends FuncLike = () => void> {
	private readonly taskParameters: P<RF>;
	private taskReadyState?: R<RF>;

	constructor (...args: P<RF>) {
		this.taskParameters = args;
	}

	protected get readyState () {
		if (this.taskReadyState == null) this.start();
		return this.taskReadyState as R<RF>;
	}

	start () {
		this.taskReadyState = this.ready(...this.taskParameters);
	}

	abstract stop (): PromiseLike<void>;
	protected abstract ready(...args: P<RF>): R<RF>;
}
