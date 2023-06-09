import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,

    PRODUCT_EDIT_REQUEST,
    PRODUCT_EDIT_SUCCESS,
    PRODUCT_EDIT_FAIL,

    PRODUCT_BIDDING_TOGGLE_REQUEST,
    PRODUCT_BIDDING_TOGGLE_SUCCESS,
    PRODUCT_BIDDING_TOGGLE_FAIL,

} from "../constants/productConstants";

import axios from "axios";

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST,
        });

        const { data } = await axios.get("https://artifex123.pythonanywhere.com/api/products");

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }

}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        const { data } = await axios.get(`https://artifex123.pythonanywhere.com/api/products/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }

}

export const newProduct = (productData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_PRODUCT_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.post('https://artifex123.pythonanywhere.com/api/products/create', productData, config)

        dispatch({
            type: CREATE_PRODUCT_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: CREATE_PRODUCT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }

}

export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.access}`,
            },
        };

        const { data } = await axios.delete(`https://artifex123.pythonanywhere.com/api/products/delete/${id}/`, config);


        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }

};

export const editProduct = (requestData) => async (dispatch, getState) => {
    console.log('requestData -> ', requestData)
    const { id } = requestData
    try {
        dispatch({
            type: PRODUCT_EDIT_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${userInfo.access}`,
            },
        };

        const { data } = await axios.put(`https://artifex123.pythonanywhere.com/api/products/update/${id}/`, requestData, config);

        dispatch({
            type: PRODUCT_EDIT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_EDIT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }

};

export const sellProduct = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_EDIT_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.access}`,
        },
      };
  
      const { data } = await axios.put(
        `https://artifex123.pythonanywhere.com/api/products/sell/${id}`,
        config
      ); //create a new product
  
      dispatch({
        type: PRODUCT_EDIT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_EDIT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const soldProduct = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_EDIT_REQUEST,
      });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.access}`,
        },
      };
  
      const { data } = await axios.put(
        `https://artifex123.pythonanywhere.com/api/products/sell/${id}`,
        config
      ); //create a new product
  
      dispatch({
        type: PRODUCT_EDIT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_EDIT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const toggleBidding = (productId, bidding) => async (
    dispatch,
    getState
) => {
    try {
        dispatch({
            type: PRODUCT_BIDDING_TOGGLE_REQUEST,
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.put(
            `https://artifex123.pythonanywhere.com/api/products/${productId}/bidding`,
            { bidding },
            config
        )

        dispatch({
            type: PRODUCT_BIDDING_TOGGLE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_BIDDING_TOGGLE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
