import styled from "@emotion/styled";
import React from "react";
import { Oval } from "react-loader-spinner";

const Container = styled.div`
  display: flex;
  justify-content: center !important;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 !important;
  padding: 0 !important;
  margin: auto !important;
  background-color: transparent !important;
  > * {
    > svg {
      background-color: inherit;
    }
  }
  .mySpinner {
    margin-top: 20px !important;
    width: fit-content !important;
    background-color: transparent !important;
    display: block;
    margin: auto !important;
  }
`;
const Spinner = () => {
  return (
    <Container className="spinnerMainContainer">
      <Oval
        height={30}
        width={30}
        color="white"
        wrapperStyle={{}}
        wrapperClass="mySpinner"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="white"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Container>
  );
};

export default Spinner;
