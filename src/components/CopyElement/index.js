import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Hint from '../Hint';
import { CopiedSvg, CopySvg } from '../../assets/icons';
import st from './styles.module.scss';

export default function CopyElement({ content, link }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
  };

  useEffect(() => {
    let interval;

    if (isCopied) {
      interval = setInterval(() => setIsCopied(false), 2000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isCopied]);

  return (
    <div className={st.contact}>
      <Hint label={isCopied ? 'Copied' : 'Copy'}>
        {isCopied ? (
          <CopiedSvg className={clsx(st.copiesSvg, st.copied)} />
        ) : (
          <CopySvg className={st.copiesSvg} onClick={handleCopy} />
        )}
      </Hint>
      {link ? (
        <a className={st.link} href={link}>
          {content}
        </a>
      ) : (
        <span className={st.text}>{content}</span>
      )}
    </div>
  );
}

CopyElement.defaultProps = {
  content: '',
  link: '',
};

CopyElement.propTypes = {
  content: PropTypes.string,
  link: PropTypes.string,
};
