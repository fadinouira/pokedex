import './Container.css';
import { ContainerProps } from './Container.type';

function Container({ maxWidth, ...props }: ContainerProps) {
  return <div className={['container-root-style'].join(' ')} style={{ maxWidth }} {...props}></div>;
}

export default Container;
