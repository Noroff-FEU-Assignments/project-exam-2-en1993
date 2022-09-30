import { useState, useEffect } from 'react';
import { PRODUCTS_API } from '../../constants/productsApi';
import Heading from '../layout/Heading';
import styles from '../accommodation/AccommodationPage.module.css';
import { RiInformationFill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiRestaurantFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function AccommodationLi(props) {
  const posts = props.posts;

  return (
    <>
      {posts.map(function (post) {
        return (
          <div key={post.id}>
            <div className={styles.products}>
              <div className={styles.product}>
                <img
                  src={post?.images[0]?.src}
                  alt={post.name}
                  className={styles.productPicture}
                />
              </div>
              <div className={styles.product}>
                <Heading content={post.name} size="3" />
                <div>
                  <FaPhoneAlt className={styles.productsIcons} />
                  <RiInformationFill className={styles.productsIcons} />
                  <RiRestaurantFill className={styles.productsIcons} />
                </div>
              </div>
              <div className={styles.product}>
                <p>From: ${post.prices.price.slice(0, 3)}</p>
                <div>
                  <Link
                    to={`/accommodation/detail/${post.id}`}
                    className={styles.moreInfoCTA}
                  >
                    {console.log(post.id)} More Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
