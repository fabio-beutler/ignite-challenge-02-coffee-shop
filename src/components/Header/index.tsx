import { useLocation } from '../../hooks/useLocation';
import { Container } from './styles';

import logo from '../../assets/logo.svg';
import { MapPin } from 'phosphor-react';
import { CartLink } from '../CartLink';
import { Link } from 'react-router-dom';

export function Header() {
  const { address, error } = useLocation();

  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt='Coffee Delivery' />
      </Link>

      <div>
        {!error && address && (
          <span>
            <span>
              <MapPin weight='fill' size={22} />
            </span>
            {address.city}, {address.state}
          </span>
        )}
        <CartLink />
      </div>
    </Container>
  );
}
