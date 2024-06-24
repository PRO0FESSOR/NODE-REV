import React from 'react'
import axios from 'axios'

const Product = ({product ,handleDelete}) => {
  return (
    <>
        <>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  body {\n    background-color: #eee;\n  }\n  .container {\n    width: 900px;\n  }\n\n  .card {\n    background-color: #fff;\n    border: none;\n    border-radius: 10px;\n    width: 250px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n\n  .image-container {\n    position: relative;\n  }\n\n  .thumbnail-image {\n    border-radius: 10px !important;\n  }\n\n  .discount {\n    background-color: red;\n    padding-top: 1px;\n    padding-bottom: 1px;\n    padding-left: 4px;\n    padding-right: 4px;\n    font-size: 10px;\n    border-radius: 6px;\n    color: #fff;\n  }\n\n  .wishlist {\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n\n  .first {\n    position: absolute;\n    width: 100%;\n    padding: 9px;\n  }\n\n  .dress-name {\n    font-size: 13px;\n    font-weight: bold;\n    width: 75%;\n  }\n\n  .new-price {\n    font-size: 13px;\n    font-weight: bold;\n    color: red;\n  }\n  .old-price {\n    font-size: 8px;\n    font-weight: bold;\n    color: grey;\n  }\n\n  .btn {\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    padding: 3px;\n  }\n\n  .creme {\n    background-color: #fff;\n    border: 2px solid grey;\n  }\n  .creme:hover {\n    border: 3px solid grey;\n  }\n\n  .creme:focus {\n    background-color: grey;\n  }\n\n  .red {\n    background-color: #fff;\n    border: 2px solid red;\n  }\n\n  .red:hover {\n    border: 3px solid red;\n  }\n  .red:focus {\n    background-color: red;\n  }\n\n  .blue {\n    background-color: #fff;\n    border: 2px solid #40c4ff;\n  }\n\n  .blue:hover {\n    border: 3px solid #40c4ff;\n  }\n  .blue:focus {\n    background-color: #40c4ff;\n  }\n  .darkblue {\n    background-color: #fff;\n    border: 2px solid #01579b;\n  }\n  .darkblue:hover {\n    border: 3px solid #01579b;\n  }\n  .darkblue:focus {\n    background-color: #01579b;\n  }\n  .yellow {\n    background-color: #fff;\n    border: 2px solid #ffca28;\n  }\n  .yellow:hover {\n    border-radius: 3px solid #ffca28;\n  }\n  .yellow:focus {\n    background-color: #ffca28;\n  }\n\n  .item-size {\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    background: #fff;\n    border: 1px solid grey;\n    color: grey;\n    font-size: 10px;\n    text-align: center;\n    align-items: center;\n    display: flex;\n    justify-content: center;\n  }\n\n  .rating-star {\n    font-size: 10px !important;\n  }\n  .rating-number {\n    font-size: 10px;\n    color: grey;\n  }\n  .buy {\n    font-size: 12px;\n    color: purple;\n    font-weight: 500;\n  }\n\n  .voutchers {\n    background-color: #fff;\n    border: none;\n    border-radius: 10px;\n    width: 190px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    overflow: hidden;\n  }\n  .voutcher-divider {\n    display: flex;\n  }\n  .voutcher-left {\n    width: 60%;\n  }\n  .voutcher-name {\n    color: grey;\n    font-size: 9px;\n    font-weight: 500;\n  }\n  .voutcher-code {\n    color: red;\n    font-size: 11px;\n    font-weight: bold;\n  }\n  .voutcher-right {\n    width: 40%;\n    background-color: purple;\n    color: #fff;\n  }\n\n  .discount-percent {\n    font-size: 12px;\n    font-weight: bold;\n    position: relative;\n    top: 5px;\n  }\n  .off {\n    font-size: 14px;\n    position: relative;\n    bottom: 5px;\n  }\n"
    }}
  />
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-3">
        <div className="card">
          <div className="image-container">
            <div className="first">
              <div className="d-flex justify-content-between align-items-center">
                <span className="discount">-25%</span>
                <span className="wishlist">
                  <button onClick={handleDelete(product._id)}><i className="fa fa-heart-o" /></button>
                </span>
              </div>
            </div>
            <img src={product.thumbnail} alt="error" className="img-fluid rounded thumbnail-image" />
          </div>
          <div className="product-detail-container p-2">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="dress-name">{product.title}</h5>
              <div className="d-flex flex-column mb-2">
                <span className="new-price">₹ {product.price}</span>
                <small className="old-price text-right">₹ 700</small>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center pt-1">
              <div>
                <i className="fa fa-star-o rating-star" />
                <span className="rating-number">{product.rating}</span>
              </div>
              <span className="buy">BUY +</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </>
  )
}

export default Product