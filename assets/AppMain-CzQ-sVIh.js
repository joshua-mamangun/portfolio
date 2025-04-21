import{r as d,T as E,j as t,l as C,d as n,b as o}from"./index-D14tQ0Ns.js";function z(){const e=d.useContext(E);if(!e)throw new Error("Theme Toggle Button is not working");return t.jsx(D,{title:`Change to ${e.theme===C?"Dark":"Light"} Theme`,onClick:e.toggleTheme,children:e.theme===C?"☀️":"🌙"})}const D=n.button`
	padding: 0;
	background: none;
	height: 1.5rem;
	border: none;
	color: ${e=>e.theme.themeIconColor};
	user-select: none;

	&:hover,
	&:active,
	&:focus {
		cursor: pointer;
	}
`;function A({children:e}){return t.jsx(M,{children:e})}const M=n.div`
	border-radius: 1.125rem;
	background: ${e=>e.theme.subtleBg};
	color: ${e=>e.theme.text};
	height: 2rem;
	font-size: 0.875rem;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 0.9375rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;function I(){const[e,l]=d.useState(!1);return d.useEffect(()=>{const r=()=>{const i=parseFloat(window.getComputedStyle(document.documentElement).fontSize);l(i>16)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e}function O({data:e}){const l=I();return t.jsxs(R,{children:[t.jsx(F,{children:e.name}),t.jsxs(P,{children:[t.jsxs(B,{children:[t.jsx(G,{children:e.position}),t.jsx(z,{})]}),t.jsx(H,{children:e.desc}),t.jsx(W,{$prefersLargerText:l,children:e.techStacks.map((r,i)=>t.jsx(N,{children:t.jsx(A,{children:r})},i))})]})]})}const R=n.section`
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	@media (min-width: ${o.lg}) {
		width: 100%;
		padding: 0 2.5rem;
		flex-direction: row;
		align-items: flex-start;
		gap: 2.5rem;
		justify-content: space-between;
		align-items: center;
	}
`,F=n.h1`
	font-size: 2.5rem;
	font-weight: bold;
	color: ${e=>e.theme.text};
	margin: 0;
	line-height: 1.15;
	white-space: wrap;
	overflow: hidden;
	text-overflow: ellipsis;

	@media (min-width: ${o.lg}) {
		font-size: 4.625rem;
		min-width: 50%;
	}
`,P=n.div`
	overflow: hidden;
`,B=n.div`
	display: flex;
	flex-direction: row;
	gap: 0.25rem;
	align-items: center;
`,G=n.p`
	font-size: 1rem;
	font-weight: bold;
	margin: 0;
`,H=n.p`
	font-size: 1rem;
	color: ${e=>e.theme.subtleText};
	margin: 0.5rem 0 0;
	line-height: 1.5;

	@media (min-width: ${o.lg}) {
		margin-top: 0.625rem;
	}
`,W=n.ul`
	list-style-type: none;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 0.5rem;
	padding: 0;
	margin: 0.75rem 0 0;

	@media (min-width: ${o.lg}) {
		flex-wrap: ${e=>e.$prefersLargerText?"wrap":"nowrap"};
		gap: 0.625rem;
		margin-top: 0.625rem;
		overflow: hidden;
	}
`,N=n.li`
`,$="LEFT",T="RIGHT",_="STAY",J=8;var g=(e=>(e.DEFAULT="default",e.NO_BG="no-bg",e.TOP_IMG="top-img",e.TOP_RIGHT_IMG="top-right-img",e.TOP_LEFT_IMG="top-left-img",e))(g||{}),y=(e=>(e.CENTER="center",e.LEFT="left",e))(y||{});const L=["top-right-img","top-img","top-left-img"],k="/portfolio/assets/work-nTpX9JRG.jpg";function v({data:e,children:l,onMouseEnter:r,onMouseLeave:i}){e.styleTypeOnSM??(e.styleTypeOnSM=g.DEFAULT),e.alignTextOnSM??(e.alignTextOnSM=y.CENTER);const s=d.useRef(null),[f,S]=d.useState(0),h=I(),a=d.useCallback(c=>{r==null||r(c)},[r]),m=d.useCallback(c=>{i==null||i(c)},[i]);return d.useEffect(()=>{var c,p;s&&S(((p=(c=s.current)==null?void 0:c.querySelector(j))==null?void 0:p.scrollHeight)??0)},[s]),t.jsxs(U,{ref:s,$bgImg:e.bgImg??k,$contentHeight:f,onMouseEnter:a,onMouseLeave:m,onTouchStart:a,onTouchEnd:m,className:e.styleTypeOnSM+" "+e.alignTextOnSM,children:[L.includes(e.styleTypeOnSM)&&t.jsx(Z,{$bgImg:e.bgImg??k}),t.jsx(V,{$useAltTitleColor:e.useAltTitleColor,children:e.title}),t.jsx(q,{children:e.subTitle}),t.jsx(j,{$prefersLargerText:h,children:l})]})}const j=n.div`
	width: 100%;
	
	@media (min-width: ${o.lg}) {
		margin-top: 0;
		align-content: center;
		visibility: hidden;
		height: 0;
		transition: all .4s ease .2s;
		overflow-x: hidden;
		overflow-y: ${e=>e.$prefersLargerText?"auto":"hidden"};
	}
`,U=n.section`
	position: relative;
	display: flex;
	flex-direction: column;
	border-radius: 1.25rem;
	box-sizing: border-box;
	line-height: 1.5;
	cursor: pointer;

	&.${g.DEFAULT} {
		padding: 1.5rem;
		background-image: url(${e=>e.$bgImg});
		background-size: cover;
		background-position: center;
		background-color: ${e=>e.theme.subtleBg};
		background-blend-mode: overlay;
	}

	&.${g.TOP_LEFT_IMG} {
		padding-right: 12%;
	}

	&.${g.TOP_RIGHT_IMG} {
		padding-left: 12%;
	}

	&.${y.CENTER} {
		justify-content: center;
		align-items: center;
	}

	@media (min-width: ${o.sm}) {
		&.${g.NO_BG} {
			padding-right: 12%;
			padding-left: 12%;
		}
	}
	
	@media (min-width: ${o.lg}) {
		background-image: url(${e=>e.$bgImg});
		background-size: cover;
		background-position: center;
		background-color: ${e=>e.theme.subtleBg};
		background-blend-mode: overlay;

		justify-content: center;
		align-items: center;
		height: 30rem;
		min-width: 30rem;
		max-width: 30rem;
		height: 32.5rem;
		max-height: 100%;
		padding: 2.5rem !important;
		text-align: center;
		transition: all .4s ease;

		&:hover {
			min-width: 36.25rem;
			max-width: 36.25rem;
		}

		&:hover ${j} {
			visibility: visible;
			height: ${e=>e.$contentHeight+"px"};
		}
	}
`,V=n.h2`
	font-size: 1.125rem;
	font-weight: bold;
	color: ${e=>e.$useAltTitleColor?e.theme.altTitleColor:e.theme.titleColor};
`,q=n.p`
	margin: 0;
	font-size: 1rem;
	color: ${e=>e.theme.text};
`,Z=n.div`
	width: 100%;
	height: 25rem;
	border-radius: 1.25rem;
	margin-bottom: 1rem;
	box-sizing: border-box;
	background-image: url(${e=>e.$bgImg});
	background-size: cover;
  	background-position: center;
	background-blend-mode: overlay;
	background-color: ${e=>e.theme.subtleBg};

	@media (min-width: ${o.sm}) {
		height: 32.5rem;
	}

	@media (min-width: ${o.lg}) {
		display: none;
	}
`,K="/portfolio/assets/contact-DrdnzqHd.jpg";function Q({data:e,onMouseEnter:l,onMouseLeave:r}){return t.jsx(v,{data:{title:e.title,subTitle:e.subTitle,bgImg:K,styleTypeOnSM:g.DEFAULT},onMouseEnter:l,onMouseLeave:r,children:t.jsx(X,{children:e.list.map((i,s)=>t.jsxs(Y,{children:[t.jsx(ee,{href:i.url,target:"_blank",rel:"nofollow noreferrer noopener",children:i.value}),t.jsx(te,{children:i.type})]},s))})})}const X=n.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	list-style-type: none;
	text-align: center;
	margin: 0;
	padding: 2rem 0 0;
`,Y=n.li`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`,ee=n.a`
	color: ${e=>e.theme.text};
	font-weight: bold;

	&:visited,
	&:focus {
		color: ${e=>e.theme.text};
	}

	&:hover {
		color: ${e=>e.theme.titleColor};
	}
`,te=n.p`
	color: ${e=>e.theme.subtleText};
	margin: 0;
`,ie="/portfolio/assets/exp-CmTmYIyB.jpg";function ne({data:e,onMouseEnter:l,onMouseLeave:r}){return t.jsx(v,{data:{title:e.title,subTitle:e.subTitle,bgImg:ie,styleTypeOnSM:g.NO_BG},onMouseEnter:l,onMouseLeave:r,children:t.jsx(re,{children:e.list.map((i,s)=>t.jsxs(oe,{children:[t.jsxs(ae,{children:[i.dateStart," - ",i.dateEnd]}),t.jsx(le,{$isTabbed:i.isTabbed,children:i.position}),t.jsx(se,{$isTabbed:i.isTabbed,children:i.company}),t.jsx(ce,{children:i.dateStart}),t.jsx(de,{children:i.dateEnd})]},s))})})}const re=n.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	list-style-type: none;
	margin: 0;
	padding: 2rem 0.75rem 0;

	@media (min-width: ${o.sm}) {
		padding-right: 0;
		padding-left: 0;
	}
	
	@media (min-width: ${o.lg}) {
		padding-right: 0.75rem;
		padding-left: 0.75rem;
	}
`,oe=n.li`
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: auto auto;

	@media (min-width: ${o.lg}) {
		display: grid;
		grid-template-columns: auto auto;
	}
`,le=n.p`
	margin: 0;
	font-weight: bold;
	grid-column: 1;
	grid-row: 1;
	text-align: left;

	@media (min-width: ${o.lg}) {
		grid-column: 1;
		grid-row: 1;
	}
`,se=n.p`
	color: ${e=>e.theme.subtleText};
	margin: 0;
	text-align: left;

	@media (min-width: ${o.lg}) {
		grid-column: 1;
		grid-row: 2;
	}
`,ae=n.p`
	display: none;
	margin: 0;
	font-size: 0.875rem;
	color: ${e=>e.theme.subtleText};
	font-style: italic;

	@media (min-width: ${o.lg}) {
		display: none;
	}
`,ce=n.p`
	display: block;
	grid-column: 2;
	grid-row: 1;
	margin: 0;
	text-align: right;
	font-style: italic;
	color: ${e=>e.theme.subtleText};
	font-size: 0.9375rem;

	@media (min-width: ${o.lg}) {
		display: block;
		grid-column: 2;
		grid-row: 1;
		margin: 0;
		text-align: right;
	}
`,de=n.p`
	display: block;
	grid-column: 2;
	grid-row: 2;
	margin: 0;
	text-align: right;
	font-style: italic;
	color: ${e=>e.theme.subtleText};
	font-size: 0.9375rem;

	@media (min-width: ${o.lg}) {
		display: block;
		grid-column: 2;
		grid-row: 2;
		margin: 0;
		text-align: right;
	}
`;function me({data:e,onMouseEnter:l,onMouseLeave:r}){return t.jsx(v,{data:{title:e.title,subTitle:e.shortDesc,styleTypeOnSM:e.styleTypeOnSM??g.TOP_IMG,alignTextOnSM:y.LEFT,bgImg:e.bgImg},onMouseEnter:l,onMouseLeave:r,children:t.jsxs(ge,{children:[t.jsx(he,{children:e.desc}),t.jsx(ue,{children:e.links.map((i,s)=>t.jsx(pe,{href:i.url,target:i.target??"_blank",rel:"nofollow noreferrer noopener",children:i.label},s))})]})})}const ge=n.div`
	text-align: left;
`,he=n.p`
	display: none;
	margin: 0.5rem 0 0;

	@media (min-width: ${o.lg}) {
		margin: 2.5rem 0 0;
		display: block;
	}
`,ue=n.div`
	display: flex;
	flex-direction: row;
	gap: 0.875rem;

	@media (min-width: ${o.lg}) {
		margin-top: 1.125rem;
		justify-content: space-between;
	}
`,pe=n.a`
	color: ${e=>e.theme.subtleText};
	text-decoration: underline;

	&:hover,
	&:hover {
		color: ${e=>e.theme.titleColor};
	}

	&:visited {
		color: ${e=>e.theme.subtleText};
	}
`;function fe(){const[e,l]=d.useState(window.innerWidth>=parseInt(o.lg));return d.useEffect(()=>{const r=()=>{l(window.innerWidth>=parseInt(o.lg))};return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e}function xe(){const e=d.useRef(null),[l,r]=d.useState(0),[i,s]=d.useState(void 0);d.useEffect(()=>{var h,a,m,c;if(e){const p=(((h=e.current)==null?void 0:h.clientWidth)??0)-(((a=e.current)==null?void 0:a.offsetLeft)??0),u=((c=(m=e.current)==null?void 0:m.children[0])==null?void 0:c.clientWidth)??0;r(p*.5-u/2+40)}},[e]);const f=d.useCallback(h=>{const a=e==null?void 0:e.current;if(a===null)return;let m=((h==null?void 0:h.currentTarget.offsetLeft)??0)-a.scrollLeft,c=_;if(m<l)c=$;else if(m>l)c=T;else return;const p=c===T?J:-8,u=setInterval(()=>{const b=a.scrollLeft+p,w=m-p;c===T&&b>=a.scrollWidth-a.clientWidth?(a.scrollLeft=a.scrollWidth-a.clientWidth,clearInterval(u)):c===$&&b<=0?(a.scrollLeft=0,clearInterval(u)):c===T&&w<=l?(a.scrollLeft=b-(l-w),clearInterval(u)):c===$&&w>=l?(a.scrollLeft=b+(w-l),clearInterval(u)):(a.scrollLeft=b,m=w)},10);return s(u),()=>{clearInterval(u),s(void 0)}},[e,l]),S=d.useCallback(()=>{clearInterval(i),s(void 0)},[i]);return{cardListRef:e,handleAutoScroll:f,handleEndScroll:S}}const x={header:{name:"JOSHUA MAMANGUN",position:"FRONTEND WEB DEVELOPER",desc:"Bringing any design to life, whether simple or complex, to create seamless and interactive experiences.",techStacks:["React","TypeScript","SCSS","Zustand","Jest"]},contact:{title:"Work Together",subTitle:"Let's turn designs into reality",list:[{type:"Email",value:"mamangunjoshua@gmail.com",url:"mailto:mamangunjoshua@gmail.com"},{type:"Linkedin",value:"Joshua Mamangun",url:"https://www.linkedin.com/in/joshua-mamangun"},{type:"Github",value:"joshua-mamangun",url:"https://github.com/joshua-mamangun"}]},experience:{title:"Experience",subTitle:"3+ years of frontend development",list:[{position:"Front End Developer",company:"WeSupport Incorporated",dateStart:"Nov 2024",dateEnd:"Nov 2025",type:"Contract"},{position:"Applications Developer",company:"TechEdge Solutions Inc.",dateStart:"Apr 2023",dateEnd:"Nov 2023",type:"Full-time"},{position:"Junior Consultant",company:"TechEdge Solutions Inc.",dateStart:"Dec 2021",dateEnd:"Apr 2023",type:"Full-time",isTabbed:!0},{position:"Full-stack Web Developer",company:"City of Malabon University",dateStart:"Feb 2021",dateEnd:"Dec 2021",type:"Contract"}]},works:{title:"Personal Projects",subTitle:"A showcase of my works",list:[{title:"Marketing Site #1",shortDesc:"A sample marketing site featuring five distinct scroll animations",desc:"This project includes five sections with distinct scroll animations: (1) Gallery-style Hero Scroll, (2) Highlight Character on Scroll, (3) Feature Showcase on Scroll, (4) Auto Horizontal Scrolling, and (5) Appearing Message Animation. Concept inspired by various sites.",techStacks:["React","Vite","TypeScript","Tailwind"],links:[{label:"Visit Site",url:"https://joshua-mamangun.github.io/marketing-1/"},{label:"View Code",url:"https://github.com/joshua-mamangun/marketing-1"}]},{title:"Marketing Site #2",shortDesc:"Featuring five sections with various animations and two cursor effects (Working In Progress)",desc:"This project includes: (1) Negative Circle Cursor with Small Image Transition, (2) Auto-Rotating Images Ring on Scroll, (3) Circular Rotation Effect on Scroll, (4) Dynamic Image/Section Reveal, and (5) Cursor Image Color Change. Concept inspired by various sites.",techStacks:["React","Next.JS","TypeScript","SCSS"],links:[]}]}};function ve(){const e=fe(),{cardListRef:l,handleAutoScroll:r,handleEndScroll:i}=xe();return t.jsxs(be,{children:[t.jsx(O,{data:x.header}),t.jsxs(we,{ref:l,children:[t.jsx(Q,{data:x.contact,...e&&{onMouseEnter:r,onMouseLeave:i}}),t.jsx(ne,{data:x.experience,...e&&{onMouseEnter:r,onMouseLeave:i}}),t.jsx(Te,{}),t.jsx(v,{data:{title:x.works.title,subTitle:x.works.subTitle+(e?", displayed on the right":""),styleTypeOnSM:g.NO_BG,useAltTitleColor:!0},...e&&{onMouseEnter:r,onMouseLeave:i}}),x.works.list.map((s,f)=>t.jsx(me,{data:{title:s.title,shortDesc:s.shortDesc,desc:s.desc,techStacks:s.techStacks,links:s.links,styleTypeOnSM:L[f%3]},...e&&{onMouseEnter:r,onMouseLeave:i}},f))]})]})}const be=n.main`
	position: relative;
	overflow: hidden;
	max-width: 100vw;

	@media (min-width: ${o.sm}) {
		padding: 1.25rem;
	}
	
	@media (min-width: ${o.lg}) {
		width: 100vw;
		max-width: 80rem;
		padding: 2.5rem 0;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`,we=n.section`
	width: 100%;
	box-sizing: border-box;
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 2.25rem;
	padding: 0.5rem 1.5rem 2.25rem;

	@media (min-width: ${o.lg}) {
		padding: 2.5rem 2.5rem 1.25rem;
		flex-direction: row;
		flex-wrap: nowrap;
		overflow: hidden;
		box-sizing: border-box;
		gap: 1.875rem;
		max-width: 80rem;
		transition: all .4s ease;
	}
`,Te=n.hr`
	color: ${e=>e.theme.dividerColor};

	@media (min-width: ${o.lg}) {
		display: none;
	}
`;export{ve as default};
