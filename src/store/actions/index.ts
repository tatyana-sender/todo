import * as TaskActionCreators from './taskAction';
import * as ProjectActionCreators from './projectAction';
import * as ModalActionCreators from './modalActions';
import * as FilterActionCreators from './filterActions';

export default {
	...TaskActionCreators,
	...ProjectActionCreators,
	...ModalActionCreators,
	...FilterActionCreators
}
