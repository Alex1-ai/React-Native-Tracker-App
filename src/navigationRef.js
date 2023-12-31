import { CommonActions } from "@react-navigation/native";

let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  if (navigator) {
    navigator.dispatch(
      CommonActions.navigate({
        name: routeName,
        params,
      })
    );
  } else {
    console.error("Navigator is not initialized. Make sure to call setNavigator.");
  }
};



// import { NavigationAction } from "@react-navigation/native";
// let navigator;

// export const setNavigator = (nav)=>{
//     navigator = nav;

// };


// export const navigate = (routeName, params) =>{
//     navigator.dispatch(
//         NavigationAction.navigate({
//             routeName,
//             params
//         })
//     )

// }
