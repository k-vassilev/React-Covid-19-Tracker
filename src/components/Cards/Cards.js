import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from "./Cards.module.css";

const Cards = ({ data: { 
	confirmed, 
	recovered, 
	deaths, 
	lastUpdate 
} }) => {
	if (!confirmed) {
		return "Loading...";
	}
	console.log(((deaths.value / confirmed.value)*100).toFixed(2));
	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Infected
						</Typography>
						<Typography variant="h5">
							<CountUp 
								start={0}
								end={confirmed.value}
								duration={2}
								separator=","
							/>
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">
							Number of active cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Death rate in percentages
						</Typography>
						<Typography variant="h5">

								<h3 className={styles.deathrate}>{((deaths.value / confirmed.value)*100).toFixed(2)}</h3>

						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">
							Death Rate from COVID-19 in percentage of total infected cases.
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Deaths
						</Typography>
						<Typography variant="h5">
							<CountUp 
								start={0}
								end={deaths.value}
								duration={2}
								separator=","
							/>
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">
							Number of deaths caused by COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
