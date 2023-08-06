import * as TaskActionCreators from './taskAction';
import * as ModalActionCreators from './modalActions';

export default {
	...TaskActionCreators,
	...ModalActionCreators
}
