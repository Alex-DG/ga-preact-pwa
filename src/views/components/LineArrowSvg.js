import { h } from 'preact';

export default function (props) {
	return (
    <div id="overlay-arrow">
      <svg viewBox="0 0 950 500" height="100%" width="100%">
        <defs>
          <marker id='head' orient="auto"
            markerWidth='20' markerHeight='20'
            refX='0.1' refY='2'>

            <path d='M0,0 V4 L3,2 Z' fill="white"/>
          </marker>
        </defs>

        <path
          id="arrow-line"
          marker-end='url(#head)'
          d={ props.coords }
          stroke="white"
          stroke-width="10"
          fill="none" />
      </svg>
    </div>
  );
}
