import { css } from '@emotion/core'

export const markdownStyle = css`
  line-height: 1.5;

  & > *:last-child {
    margin-bottom: 0;
  }

  & a {
    color: #0366d6;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  & pre {
    background-color: #f6f8fa;
    border-radius: 3px;
    padding: 16px;
    font-family: var(--font-code);
    margin: 15px 0;
  }

  & *:not(pre) > code {
    background-color: #f6f8fa;
    border-radius: 3px;
    padding: 3px 5px;
    font-size: 0.875rem;
    font-family: var(--font-code);
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5 {
    font-weight: 500;
  }

  & h1 {
    font-size: 32px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.3em;
    margin-bottom: 20px;
  }

  & h2 {
    font-size: 24px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.3em;
  }

  & h3 {
    font-size: 20px;
  }

  & h4 {
    font-size: 16px;
  }

  & h5 {
    font-size: 14px;
  }

  & h5,
  & h6 {
    font-weight: 600;
  }

  & h6 {
    font-size: 12px;
  }

  & p {
    margin: 15px 0;
  }

  & ul,
  & ol {
    padding-left: 20px;
  }

  & blockquote {
    border-left: 0.25em solid #dfe2e5;
    color: #6a737d;
    padding: 0 1em;
    margin: 15px 0;
  }
`
