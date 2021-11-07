import Header from "../components/header";
import './Home.scss';
import editingAndProofReading from '../assets/editing_and_proofreading.svg';
import contentWriting from '../assets/content_writing.svg';
import ebookCreationAndPublishing from '../assets/ebook_creation_and_publishing.svg';
import coaching from '../assets/coaching.svg';
import { Link } from "react-router-dom";
import MediumPost from "../components/medium-post";

export default function Home() {

  return (
    <div className='bg-light'>

      <Header></Header>

      <section className='__hero container py-5 d-flex flex-column align-items-center justify-content-center'>

        <div className='__hero_title mb-2'>
          <h1 className='h1 fw-bold lh-1 d-flex flex-column align-items-center justify-content-center'>
            <span className='text-primary text-center'>WORDMART</span>
            <span className='text-secondary text-center'>YOU WRITE, WE EDIT.</span>
          </h1>
        </div>

        <div className='__hero_content w-100 d-flex align-items-center' title='WordMart - You Write, We Edit.'>

          <div className=''></div>

          <div className='__hero_content_text bg-transparent text-dark'>

            <p className=''>We provide excellent and error-free editorial services that ensures that our clients’ communicate effectively with their own clients.</p>

            <Link className='btn btn-primary btn-lg' to='/contact'>GET IN TOUCH</Link>

          </div>

        </div>

      </section>

      <section className='__services container'>

        <h2 className='text-primary fw-bold h1 mb-5'>OUR SERVICES</h2>

        <div className='bg-white p-lg-4 pb-lg-3 row'>

          <div className='__service col-md-6 col-12 px-lg-3'>

            <div className='__service_container position-relative'>
              <img className='position-absolute top-0 start-0' src={editingAndProofReading} alt="Editing and Proof Reading" />

              <div className='__service_description position-absolute start-0 bottom-0 bg-white py-3 px-5 mb-3 ms-4 text-center'>
                <span className='text-primary fw-bold h6 m-0'>EDITING <br /> AND PROOFREADING</span>
              </div>
            </div>

          </div>

          <div className='__service col-md-6 col-12 px-lg-3'>

            <div className='__service_container position-relative'>
              <img className='position-absolute top-0 start-0' src={contentWriting} alt="Content Writing" />

              <div className='__service_description position-absolute start-0 bottom-0 bg-white py-3 px-5 mb-3 ms-4 text-center'>
                <span className='text-primary fw-bold h6 m-0'>CONTENT WRITING</span>
              </div>
            </div>

          </div>

        </div>

        <div className='bg-white p-lg-4 pt-lg-3 row'>

          <div className='__service col-md-6 col-12 px-lg-3'>

            <div className='__service_container position-relative'>
              <img className='position-absolute top-0 start-0' src={ebookCreationAndPublishing} alt="Ebook Creation and Publishing" />

              <div className='__service_description position-absolute start-0 bottom-0 bg-white py-3 px-5 mb-3 ms-4 text-center'>
                <span className='text-primary fw-bold h6 m-0'>EBOOK CREATION AND <br /> PUBLISHING</span>
              </div>
            </div>

          </div>

          <div className='__service col-md-6 col-12 px-lg-3'>

            <div className='__service_container position-relative'>
              <img className='position-absolute top-0 start-0' src={coaching} alt="Coaching" />

              <div className='__service_description position-absolute start-0 bottom-0 bg-white py-3 px-5 mb-3 ms-4 text-center'>
                <span className='text-primary fw-bold h6 m-0'>COACHING</span>
              </div>
            </div>

          </div>

        </div>

        <div className='mt-lg-5 d-flex justify-content-end'>

          <Link to='/services' className='btn btn-primary btn-lg px-5 py-3'>
            VIEW MORE
          </Link>

        </div>

      </section >

      <section className='__blog_articles container mt-lg-4'>
        <div className='row h-100'>

          <div className='col-md-6 col-12 d-flex align-items-center justify-content-center'>
            <div>

              <h2 className='text-primary fw-bold h1 mb-5'>Find Interesting <br /> Articles On Our Blog</h2>

              <Link to='/blog' className='btn btn-primary btn-lg px-5 py-3'>
                VIEW MORE
              </Link>

            </div>
          </div>

          <div className='col-md-6 col-12 d-flex align-items-center justify-content-center'>
            <MediumPost />
          </div>

        </div>
      </section>

      <section className='__books container mt-lg-4'>
        <div className='row h-100'>

          <div className='col-md-6 col-12 d-flex align-items-center justify-content-center'>

            <div className="__books_container row">
              <div className="col-6 p-3">
                <div className="__book_thumbnail"></div>
              </div>
              <div className="col-6 p-3">
                <div className="__book_thumbnail"></div>
              </div>
              <div className="col-6 p-3">
                <div className="__book_thumbnail"></div>
              </div>
              <div className="col-6 p-3">
                <div className="__book_thumbnail"></div>
              </div>
            </div>

          </div>

          <div className='col-md-6 col-12 d-flex align-items-center justify-content-center'>
            <div>

              <h2 className='text-primary fw-bold h1 mb-5'>Some Books We've <br /> Worked On</h2>

              <Link to='/about' className='btn btn-primary btn-lg px-5 py-3'>
                VIEW MORE
              </Link>

            </div>
          </div>

        </div>
      </section>

      <section className='__clients container mt-lg-5'>

        <div className="h-100 d-flex flex-column align-items-center justify-content-center">

          <h2 className='text-primary fw-bold h1 mb-5'>Some Clients We've Worked With</h2>

          <div>
            
          </div>

        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />

    </div >
  )
}