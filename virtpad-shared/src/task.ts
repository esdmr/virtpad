type PromiseLike<T> = T | Promise<T>;

export abstract class Task {
	protected get readyState () {
		return;
	}

	abstract stop (): void;
}

export abstract class AsyncTask<ReadyFunc extends (...arg: any[]) => any = () => void> {
	private taskReadyState: Promise<ReturnType<ReadyFunc>>;

	constructor (...args: Parameters<ReadyFunc>) {
		this.taskReadyState = this.ready(...args);
	}

	protected get readyState () {
		return this.taskReadyState;
	}

	abstract ready (...args: Parameters<ReadyFunc>): Promise<ReturnType<ReadyFunc>>;
	abstract stop (): PromiseLike<void>;
}
