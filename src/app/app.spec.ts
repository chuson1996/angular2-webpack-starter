import {
	it,
	inject,
	injectAsync,
	beforeEachProviders,
	TestComponentBuilder
} from 'angular2/testing';

import {WebpackState} from 'angular2-hmr';

// Load the implementations that should be tested
import {App} from './app';
import {AppState} from './app.service';

describe('App', () => {
	// provide our implementations or mocks to the dependency injector
	beforeEachProviders(() => [
		App,
		AppState,
		WebpackState
	]);

	it('should have a url', inject([ App ], (app) => {
		expect(app.url).toEqual('https://twitter.com/AngularClass');
	}));

});
