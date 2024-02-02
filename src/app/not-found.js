import styles from '@/app/styles/common.module.css'
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <div
                className="page-title image-title"
                style={{
                    backgroundImage: "url(https://topindiatrips.com/assets/img/taj.jpg)"
                }}
            >
                <section class="common_container__Tfm1z">
                    <div class="common_error_page__FtUEL" style={{ flexDirection: 'column' }}>
                        <h1 style={{ color: '#fff' }}>404</h1>
                        <h2 style={{ color: 'red' }}>Not Found</h2>
                        <p style={{ color: '#fff' }}>Could not find requested resource</p>
                        <a href="/">
                            <button style={{ backgroundColor: '#fff', color: 'red', border: '2px solid #2a3646', padding:'3px 4px',borderRadius:'5px' }}>Go to Home Page</button>

                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}

export default NotFound;