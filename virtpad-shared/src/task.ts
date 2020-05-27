type PromiseLike<T> = T | Promise<T>;

export abstract class Task {
	protected get readyState () {
		return;
	}

	abstract stop (): void;
}

export abstract class AsyncTask<ReadyType = void> {
	private taskReadyState = this.ready();

	protected get readyState () {
		return this.taskReadyState;
	}

	abstract ready (): Promise<ReadyType>;
	abstract stop (): PromiseLike<void>;
}
