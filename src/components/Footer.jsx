import './Footer.scss';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>
                        De<span className='primary'>Fi</span>
                    </h1>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'></span>
                    <a href='/'>Contact us</a>
                    <a href='/'>Chat</a>
                    <a href='/'>Help Center</a>
                    <a href='/'>FAQ</a>
                </div>
                <div className='col'>
                    <h5>Developers</h5>
                    <span className='bar'></span>
                    <a href='/'>Cloud</a>
                    <a href='/'>Commerce</a>
                    <a href='/'>Pro</a>
                    <a href='/'>API</a>
                </div>
                <div className='col'>
                    <h5>Company</h5>
                    <span className='bar'></span>
                    <a href='/'>About</a>
                    <a href='/'>Information</a>
                    <a href='/'>Legal</a>
                    <a href='/'>Privacy</a>
                </div>
                <div className='col'>
                    <h5>Social</h5>
                    <span className='bar'></span>
                    <a href='https://www.facebook.com/' target="_blank" rel="noreferrer">
                        <FaFacebook className='icon' />
                    </a>
                    <a href='https://twitter.com/' target="_blank" rel="noreferrer">
                        <FaTwitter className='icon' />
                    </a>
                    <a href='https://www.linkedin.com/' target="_blank" rel="noreferrer">
                        <FaLinkedin className='icon' />
                    </a>
                    <a href='https://github.com/' target="_blank" rel="noreferrer">
                        <FaGithub className='icon' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
