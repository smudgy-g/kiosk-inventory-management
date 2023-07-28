import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
// import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import '../styles/supplierComponent.css';

interface SupplierComponentProps {
  key: String;
  name: String;
  id: Number;
}

export default function SupplierComponent({id, name}: SupplierComponentProps) {
  
  return (
    <div className='supplier-component-container'>
      <div>
        <Link to={`/products/`} state={{id, name}}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='4em'
            viewBox='0 0 512 512'>
            <path d='M32 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32V96h51.2c42.4 0 76.8 34.4 76.8 76.8V274.9c0 30.4-17.9 57.9-45.6 70.2L384 381.7V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM384 311.6l56.4-25.1c4.6-2.1 7.6-6.6 7.6-11.7V172.8c0-7.1-5.7-12.8-12.8-12.8H384V311.6zM160 144c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144z' />
          </svg>
        </Link>
      </div>
      <div className='supplier-details-wrapper'>
        <div className='supplier-name'>{name}</div>
        <div className='btn-wrapper'>
          <div className='small-button'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='1.5em'
              viewBox='0 0 512 512'>
              <path
                d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z'
                fill='#fff'
              />
            </svg>
          </div>
          <div className='small-button'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='1.5em'
              viewBox='0 0 448 512'>
              <path
                d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'
                fill='#fff'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
