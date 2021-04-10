import styles from '../styles/css.module.css';

export default function Class_css() {
	return (
		<>
			<h2>CSS</h2>

			<h3 style={
				{
					color:'#ff3366',
					marginBottom:'10px'
				}
			}>Inline Style</h3>

			<h3 className='h3'>ClassName Style (Global)</h3>
			<h3 className={styles.h3}>ClassName Style (Module)</h3>
		</>
	);
}