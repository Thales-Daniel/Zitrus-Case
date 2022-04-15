import axios from 'axios';

const getCostumers = async () => {
  try {
    const url = 'api/customers';
    const { data } = await axios.get(url);
    return data.costumers;
  } catch (err) {
    return err;
  }
};

export default getCostumers;
