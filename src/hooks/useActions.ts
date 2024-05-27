import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '@/store/actions';
import { AppDispatch } from '@/store/index';

export const useActions = () => {
	const dispatch = useDispatch<AppDispatch>()
	return bindActionCreators(ActionCreators, dispatch)
}
