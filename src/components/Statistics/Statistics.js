import React from "react";
import css from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, data }) => {
	return (
		<section className={css.statistics}>
			{title ? <h2 className={css.title}>{title}</h2> : null}
			<ul className={css["stat-list"]}>
				{data.map((item, index) => {
					const randomColor = `#${Math.floor(Math.random() * 16777215)
						.toString(16)
						.padStart(6, 0)}`;
					const itemStyle = {
						backgroundColor: randomColor,
						flexBasis: `calc(100%/${data.length})`,
					};

					if (!title && index === 0) {
						itemStyle.borderTopLeftRadius = "5px";
					}
					if (!title && index === data.length - 1) {
						itemStyle.borderTopRightRadius = "5px";
					}

					return (
						<li key={item.id} className={css.item} style={itemStyle}>
							<span className={css.label}>{item.label}</span>
							<span className={css.percentage}>{item.percentage}%</span>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

Statistics.propTypes = {
	title: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		}).isRequired
	).isRequired,
};

export default Statistics;
