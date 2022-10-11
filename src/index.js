import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
// domain
// dev - h4gclhvy.us.auth0.com
// clientId
// EMeNc6qV2IyUsT7da0Q4kl6QEvlT2Buq

ReactDOM.render(
  <Auth0Provider
    domain="dev-h4gclhvy.us.auth0.com"
    clientId="EMeNc6qV2IyUsT7da0Q4kl6QEvlT2Buq"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
)
