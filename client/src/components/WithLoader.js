// Este High Order Component renderiza una animcación de carga
// basada en la propiedad "loading". Si esta propiedad no está

import Loader from "./Loader";

const withLoader = (WrappedComponent) => {
  const newComponent = (props) => {
    const { loading } = props;
    return loading == null || loading == false ? (
      <WrappedComponent {...props} />
    ) : (
      <Loader text="Cargando..." />
    );
  };

  newComponent.displayName = `withLoader(${WrappedComponent.displayName})`;

  return newComponent;
};

export default withLoader;
