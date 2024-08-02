import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CategoryOfWorkList } from "./categoryOfWork/CategoryOfWorkList";
import { CategoryOfWorkCreate } from "./categoryOfWork/CategoryOfWorkCreate";
import { CategoryOfWorkEdit } from "./categoryOfWork/CategoryOfWorkEdit";
import { CategoryOfWorkShow } from "./categoryOfWork/CategoryOfWorkShow";
import { WorkList } from "./work/WorkList";
import { WorkCreate } from "./work/WorkCreate";
import { WorkEdit } from "./work/WorkEdit";
import { WorkShow } from "./work/WorkShow";
import { BlogList } from "./blog/BlogList";
import { BlogCreate } from "./blog/BlogCreate";
import { BlogEdit } from "./blog/BlogEdit";
import { BlogShow } from "./blog/BlogShow";
import { ProductsList } from "./products/ProductsList";
import { ProductsCreate } from "./products/ProductsCreate";
import { ProductsEdit } from "./products/ProductsEdit";
import { ProductsShow } from "./products/ProductsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PortfolioAPIService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CategoryOfWork"
          list={CategoryOfWorkList}
          edit={CategoryOfWorkEdit}
          create={CategoryOfWorkCreate}
          show={CategoryOfWorkShow}
        />
        <Resource
          name="Work"
          list={WorkList}
          edit={WorkEdit}
          create={WorkCreate}
          show={WorkShow}
        />
        <Resource
          name="Blog"
          list={BlogList}
          edit={BlogEdit}
          create={BlogCreate}
          show={BlogShow}
        />
        <Resource
          name="Products"
          list={ProductsList}
          edit={ProductsEdit}
          create={ProductsCreate}
          show={ProductsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
