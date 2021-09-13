import axios from "axios";

const ReadApi = () => {

    let config ={
      method:'get',
      // url:'http://dev-gtw1.coutloot.com:20038/product/list'
      url: 'https://fakestoreapi.com/products'
    }
    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) =>{
      console.log(error);
    } )


  return (
    <> </>
  );
}

export default ReadApi;
