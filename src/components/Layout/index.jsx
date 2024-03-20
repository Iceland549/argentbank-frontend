import Header from '../Header';
import Footer from '../Footer';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

/*Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
*/

export default Layout;
