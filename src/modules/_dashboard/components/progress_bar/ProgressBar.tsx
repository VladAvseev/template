import { LinearProgress, Typography } from "@mui/material";
import React from "react";
import styles from "./ProgressBar.module.css";

type props = {
    currentProgress: number,
}

export const ProgressBar: React.FC<props> = ({ currentProgress }) => {
    return (
        <div className={styles.progressBar}>
			<Typography>Общий прогресс:</Typography>
			<LinearProgress
				variant="determinate"
				value={currentProgress}
				style={{ width: '100%' }}
			/>
			<Typography>{currentProgress}%</Typography>
		</div>
    )
}