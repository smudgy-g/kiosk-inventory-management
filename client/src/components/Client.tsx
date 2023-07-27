import { Link } from 'react-router-dom';
import SupplierComponent from './SupplierComponent';
import '../styles/client.css'

export default function Client() {
  return (
    <>
      <header>
        logo
        <h1>Shenanigans</h1>
      </header>
      <main>
        <div className='supplier-list-container'>
          <SupplierComponent name='Beer Dewds' />
          <SupplierComponent name='Victorias Veggies' />
          <SupplierComponent name='Sick Spirits' />
          <SupplierComponent name='Meat Munchers' />
        </div>
        <div className='flex-row margin-30-top'>
          <div className='btn blue'>Stocktake</div>
          <div className='btn black'>Add Supplier</div>
        </div>
      </main>
    </>
  );
}
