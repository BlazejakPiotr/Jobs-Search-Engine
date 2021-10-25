export const fetchData = () => {
  return async (dispatch, getState) => {
    // dispatch({
    //     type:
    //     payload:
    // })
    try {
      let res = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?limit=25`
      );
      if (res.ok) {
        let offers = await res.json();
        dispatch({
          type: "FETCH_JOBS",
          payload: offers.data,
        });
        // let offers = await res.json();
        // setData(offers);
        // loadingData();
      } else {
        console.log(res);
        // throw new Error(res.statusText);
        // //   dispatch({
        // //     type: "FETCH_ERROR",
        // //     payload: res.statusText,
        // //   });
      }
    } catch (error) {
      console.log(error, "hehehhe");
      dispatch({
        type: "FETCH_ERROR",
        payload: true,
      });
    }
  };
};
