// import { useState } from "react";
// import { ThemeProvider } from "styled-components";
// import "../styles/globals.css";
// import { GlobalStyles } from "../Themeconfig";
// import Layout from "./component/Layout";
// import { lightTheme, darkTheme } from "../Themeconfig";

import Layout from "../component/Layout";
import "../styles/globals.css";

// function MyApp({ Component, pageProps }) {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     theme == "light" ? setTheme("dark") : setTheme("light");
//   };
//   return (
//     <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
//       <Layout>
//         <GlobalStyles />
//         <button className="btn btn-primary" onClick={toggleTheme}>
//           Switch Theme
//         </button>
//         <Component {...pageProps} />
//       </Layout>
//     </ThemeProvider>
//   );
// }

// export default MyApp;
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
