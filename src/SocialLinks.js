import React from 'react'
import { css } from '@emotion/core'

export const SocialLinks = ({ links }) => {
  if (links === null) {
    return null
  }

  return (
    <div css={styles.socialLinksWrapper}>
      {links.map(link => {
        return (
          <div key={link.url}>
            <a href={link.url}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#999"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                css={styles.socialLinkIcon}
              >
                {link.type === 'github' && (
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                )}

                {link.type === 'twitter' && (
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                )}

                {link.type === 'donate' && (
                  <>
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </>
                )}

                {link.type === 'custom' && (
                  <>
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </>
                )}
              </svg>
            </a>
          </div>
        )
      })}
    </div>
  )
}

const styles = {
  socialLinksWrapper: css`
    display: flex;
    justify-content: space-evenly;
    border-top: 1px solid #e2e2e2;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px 0 10px 0;
    background-color: #f7f7f7;
  `,
  socialLinkIcon: css`
    stroke: #999;

    &:hover {
      stroke: black;
    }
  `
}
