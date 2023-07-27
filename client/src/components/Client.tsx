import { Link } from 'react-router-dom';
import SupplierComponent from './SupplierComponent';

export default function Client() {
  return (
    <>
      <header>
        logo
        <h1>Shenanigans</h1>
      </header>
      <main>
        <SupplierComponent name='Beer Dewds' />
        <SupplierComponent name='Victorias Veggies' />
        <SupplierComponent name='Sick Spirits' />
        <SupplierComponent name='Meat Munchers' />
      </main>
    </>
  );
}
