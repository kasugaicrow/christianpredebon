import React from 'react'

const BlogIcon: React.FC<{ isFilled: boolean }> = ({ isFilled }) => isFilled ? (
  <svg  height="492pt" viewBox="0 0 492.49284 492" width="492pt" xmlns="http://www.w3.org/2000/svg">
    <path fill="#e0fbfc" d="m304.140625 82.472656-270.976563 270.996094c-1.363281 1.367188-2.347656 3.09375-2.816406 4.949219l-30.035156 120.554687c-.898438 3.628906.167969 7.488282 2.816406 10.136719 2.003906 2.003906 4.734375 3.113281 7.527344 3.113281.855469 0 1.730469-.105468 2.582031-.320312l120.554688-30.039063c1.878906-.46875 3.585937-1.449219 4.949219-2.8125l271-270.976562zm0 0"/>
    <path fill="#e0fbfc" d="m476.875 45.523438-30.164062-30.164063c-20.160157-20.160156-55.296876-20.140625-75.433594 0l-36.949219 36.949219 105.597656 105.597656 36.949219-36.949219c10.070312-10.066406 15.617188-23.464843 15.617188-37.714843s-5.546876-27.648438-15.617188-37.71875zm0 0"/>
  </svg>
) : (
  <svg height="503pt" viewBox="0 0 503 503.12533" width="503pt" xmlns="http://www.w3.org/2000/svg">
    <path fill="#e0fbfc" d="m16.050781 503.125c-4.179687 0-8.277343-1.640625-11.304687-4.691406-3.96875-3.96875-5.570313-9.730469-4.203125-15.167969l30.035156-120.554687c.703125-2.816407 2.15625-5.398438 4.203125-7.445313l338.113281-338.113281c22.867188-22.871094 60.09375-22.871094 82.964844 0l30.164063 30.164062c22.871093 22.871094 22.871093 60.097656 0 82.964844l-338.109376 338.113281c-2.050781 2.046875-4.632812 3.519531-7.445312 4.203125l-120.554688 30.035156c-1.28125.34375-2.5625.492188-3.863281.492188zm44.480469-128.382812-22.527344 90.410156 90.410156-22.527344 334.996094-334.976562c10.390625-10.390626 10.390625-27.328126 0-37.71875l-30.164062-30.164063c-10.410156-10.410156-27.351563-10.390625-37.71875 0zm76.074219 82.347656h.214843zm0 0"/>
    <path fill="#e0fbfc" d="m422.6875 187.007812c-4.097656 0-8.195312-1.558593-11.308594-4.691406l-90.515625-90.496094c-6.253906-6.253906-6.253906-16.386718 0-22.636718 6.25-6.25 16.382813-6.25 22.632813 0l90.519531 90.519531c6.25 6.25 6.25 16.382813 0 22.632813-3.160156 3.113281-7.253906 4.671874-11.328125 4.671874zm0 0"/>
    <path fill="#e0fbfc" d="m136.605469 473.089844c-4.097657 0-8.191407-1.558594-11.304688-4.695313l-90.519531-90.515625c-6.25-6.253906-6.25-16.386718 0-22.636718s16.382812-6.25 22.636719 0l90.515625 90.519531c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.136719-7.230469 4.695313-11.328125 4.695313zm0 0"/>
  </svg>
)

export default BlogIcon

