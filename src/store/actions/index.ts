import * as TaskActionCreators from './taskAction';
import * as ModalActionCreators from './modalActions';
import * as FilterActionCreators from './filterActions';

export default {
	...TaskActionCreators,
	...ModalActionCreators,
	...FilterActionCreators
}
