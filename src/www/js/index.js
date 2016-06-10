import keyMirror from 'key-mirror';
import { Dispatcher } from 'flux';
import { EventEmitter } from 'events';

console.log('Welcome to Introduction to Flux!');

const actions = keyMirror({
	REFRESH: null,
	INSERT: null,
	UPDATE: null,
	DELETE: null
});

console.dir(actions);


const dispatcher = new Dispatcher();

console.dir(dispatcher);

dispatcher.register(action => {

	console.dir(action);
	console.dir(arguments);


});

dispatcher.dispatch({
	action: actions.REFRESH,
	data: 'some data'
});

const EVENT_CHANGE = 'change';

class BaseStore extends EventEmitter {

	constructor() {
		super();
	}

	emitChange() {
		this.trigger(EVENT_CHANGE);
	}

	addChangeListener(cb) {
		this.on(EVENT_CHANGE, cb);
	}

	removeChangeListener(cb) {
		this.off(EVENT_CHANGE, cb);
	}

}

class DemoStore extends BaseStore {
	
}
