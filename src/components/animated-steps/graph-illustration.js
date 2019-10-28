import React from 'react';
import { motion } from 'framer-motion';

export default class SvgComponent extends React.Component {
  render() {
    return (
      <svg width={260} height={260} viewBox="0 0 260 260" fill="none">
        <g id="illustration-graph-steps">
          <g id="grid" fill="#E6EBF2">
            <path d="M208 165h4.017v4.068H208V165zM208 174.492h4.017v4.067H208v-4.067zM212.017 183.983H208v4.068h4.017v-4.068zM208 193.475h4.017v4.067H208v-4.067zM212.017 202.966H208v4.068h4.017v-4.068zM208 212.458h4.017v4.067H208v-4.067zM212.017 221.949H208v4.068h4.017v-4.068zM208 231.441h4.017v4.067H208v-4.067zM212.017 240.932H208V245h4.017v-4.068zM217.374 165h4.017v4.068h-4.017V165zM221.391 174.492h-4.017v4.067h4.017v-4.067zM217.374 183.983h4.017v4.068h-4.017v-4.068zM221.391 193.475h-4.017v4.067h4.017v-4.067zM217.374 202.966h4.017v4.068h-4.017v-4.068zM221.391 212.458h-4.017v4.067h4.017v-4.067zM217.374 221.949h4.017v4.068h-4.017v-4.068zM221.391 231.441h-4.017v4.067h4.017v-4.067zM217.374 240.932h4.017V245h-4.017v-4.068zM230.764 165h-4.017v4.068h4.017V165zM226.747 174.492h4.017v4.067h-4.017v-4.067zM230.764 183.983h-4.017v4.068h4.017v-4.068zM226.747 193.475h4.017v4.067h-4.017v-4.067zM230.764 202.966h-4.017v4.068h4.017v-4.068zM226.747 212.458h4.017v4.067h-4.017v-4.067zM230.764 221.949h-4.017v4.068h4.017v-4.068zM226.747 231.441h4.017v4.067h-4.017v-4.067zM230.764 240.932h-4.017V245h4.017v-4.068z" />
          </g>
          <g id="squiggle" stroke="#E6EBF2" strokeWidth={12}>
            <path id="Ellipse" d="M196 15c-8.284 0-15-6.716-15-15" />
            <path id="Ellipse_2" d="M196 15c8.284 0 15 6.716 15 15" />
            <path id="Ellipse_3" d="M226 45c-8.284 0-15-6.716-15-15" />
            <path id="Ellipse_4" d="M226 45c8.284 0 15 6.716 15 15" />
          </g>
          <g id="squares-2">
            <path id="Rectangle" fill="#00BFB3" d="M82 0h24v24H82z" />
            <path id="Rectangle_2" fill="#FEC514" d="M70 24h12v12H70z" />
          </g>
          <g id="squares-1">
            <path
              id="Rectangle_3"
              transform="rotate(80 33.736 119.848)"
              fill="#F5F7FA"
              d="M33.736 119.848h20v20h-20z"
            />
            <path
              id="Rectangle_4"
              transform="rotate(80 12.304 113.473)"
              fill="#FEC514"
              d="M12.304 113.473h10v10h-10z"
            />
          </g>
          <motion.g
            initial={false}
            id="star-2"
            animate={{
              scaleY: [1, 0.1, 1],
            }}
            transition={{
              duration: 0.25,
              loop: Infinity,
              repeatDelay: 6,
            }}>
            <path
              id="Union"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M213 86h-4v6h-6v4h6v6h4v-6h6v-4h-6v-6z"
              fill="#E6EBF2"
            />
          </motion.g>
          <motion.g
            initial={false}
            id="star-1"
            animate={{
              scaleY: [1, 0.1, 1],
            }}
            transition={{
              duration: 0.25,
              loop: Infinity,
              repeatDelay: 4,
            }}>
            <path
              id="Union_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M174.813 168.984l-1.75 3.032 4.546 2.625-2.625 4.546 3.031 1.75 2.625-4.546 4.547 2.625 1.75-3.032-4.547-2.625 2.625-4.546-3.031-1.75-2.625 4.546-4.546-2.625z"
              fill="#E6EBF2"
            />
          </motion.g>
          <g id="square-gray-1">
            <path
              id="Union_3"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.954 203.686l-2.782 1.124 1.686 4.172-4.172 1.686 1.123 2.781 4.173-1.686 1.686 4.173 2.781-1.124-1.686-4.172 4.173-1.686-1.124-2.782-4.172 1.686-1.686-4.172z"
              fill="#E6EBF2"
            />
          </g>
          <g id="square-yellow-1">
            <path id="Rectangle_5" fill="#FEC514" d="M110 247h12v12h-12z" />
          </g>
          <g id="graph-illustration">
            <motion.g
              d="node-and-con-green-2"
              style={{
                originX: '84px', // 144.75px
                originY: '106px', // 139px
              }}
              animate={{
                rotate: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                loop: Infinity,
                ease: 'easeInOut',
              }}>
              <path
                id="Rectangle 243"
                transform="scale(1 -1) rotate(10 948.718 433.972)"
                fill="#343741"
                d="M0 0h5.728v57.997H0z"
              />
              <circle
                id="Ellipse 14"
                r={14.678}
                transform="scale(1 -1) rotate(10 946.83 449.915)"
                fill="#00BFB3"
              />
            </motion.g>
            <motion.g
              initial={false}
              id="node-and-con-green-1"
              style={{
                originX: '128px', // 144.75px
                originY: '199px', // 139px
              }}
              animate={{
                rotate: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                loop: Infinity,
                ease: 'easeInOut',
              }}>
              >
              <path
                id="Rectangle 243_2"
                transform="rotate(140 161.666 232.065)"
                fill="#343741"
                d="M161.666 232.065h5.728v45.746h-5.728z"
              />
              <circle
                id="Ellipse 14_2"
                cx={159.468}
                cy={233.798}
                r={14.678}
                transform="rotate(140 159.468 233.798)"
                fill="#00BFB3"
              />
            </motion.g>
            <g id="node-and-con-blue-4">
              <path
                id="Rectangle 243_3"
                fill="#343741"
                d="M146.341 79.32h5.728v57.997h-5.728z"
              />
              <circle
                id="Ellipse 14_3"
                cx={149.563}
                cy={79.678}
                r={14.678}
                fill="#006BB4"
              />
            </g>
            <g id="node-and-con-blue-3">
              <path
                id="Rectangle 243_4"
                transform="rotate(90 241 137)"
                fill="#343741"
                d="M241 137h6v88h-6z"
              />
              <circle
                id="Ellipse 14_4"
                cx={240.639}
                cy={140.678}
                r={14.678}
                transform="rotate(90 240.639 140.678)"
                fill="#006BB4"
              />
            </g>
            <g id="node-and-con-blue-2">
              <path
                id="Rectangle 243_5"
                transform="scale(1 -1) rotate(-20 -470.605 -455.347)"
                fill="#343741"
                d="M0 0h5.728v57.997H0z"
              />
              <circle
                id="Ellipse 14_5"
                r={14.678}
                transform="scale(1 -1) rotate(-20 -493.535 -460.724)"
                fill="#006BB4"
              />
            </g>
            <g id="node-and-con-blue-1">
              <path
                id="Rectangle 243_6"
                transform="rotate(-60 82.13 104.13)"
                fill="#343741"
                d="M82.13 104.13h5.728v71.601H82.13z"
              />
              <circle
                id="Ellipse 14_6"
                cx={84.051}
                cy={101.519}
                r={14.678}
                transform="rotate(-60 84.05 101.519)"
                fill="#006BB4"
              />
            </g>
            <g id="graph-illustration_center">
              <motion.g
                id="abstract-arcs"
                initial={false}
                style={{
                  originX: '152px', // 144.75px
                  originY: '138px', // 139px
                }}
                animate={{
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 20,
                  loop: Infinity,
                  ease: 'easeInOut',
                }}>
                <path
                  id="Ellipse_5"
                  d="M152 110a28.998 28.998 0 00-29 29 28.998 28.998 0 0029 29v-58z"
                  fill="#07C"
                />
                <circle
                  id="Ellipse_6"
                  cx={152}
                  cy={139}
                  r={14.5}
                  fill="#343741"
                />
                <circle
                  id="Ellipse_7"
                  cx={152}
                  cy={139}
                  r={14.5}
                  fill="#343741"
                />
                <path
                  id="Ellipse_8"
                  d="M152 124.5a14.495 14.495 0 0110.253 4.247A14.493 14.493 0 01166.5 139H152v-14.5z"
                  fill="#FA744E"
                />
                <path
                  id="Ellipse_9"
                  d="M166.5 139a14.495 14.495 0 01-4.247 10.253A14.493 14.493 0 01152 153.5V139h14.5z"
                  fill="#00BFB3"
                />
              </motion.g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
