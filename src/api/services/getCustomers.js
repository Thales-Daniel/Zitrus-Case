import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../../redux/customerSlice';

const dispatch = useDispatch();

const getCostumers = async () => {
  try {
    const fetch = await axios.get('api/customers');
    const { data: { customers } } = fetch;
    dispatch(addCustomer(customers));
  } catch (err) {
    console.error(err);
  }
};

export default getCostumers;
