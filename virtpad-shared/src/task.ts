type PromiseLike<T> = T | Promise<T>;

export abstract class Task {
	protected get readyState () {
		return;
	}

	abstract stop (): void;
}

export abstract class AsyncTask<ReadyType = void> {
	#readyState = this.ready();

	protected get readyState () {
		return this.#readyState;
	}

	abstract ready (): Promise<ReadyType>;
	abstract stop (): PromiseLike<void>;
}
