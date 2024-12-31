const GenderCheckbox = (props: any) => {
	const { onCheckboxClick, selectedGender } = props;
	return (
		<div className="flex">
			<div className="form-control">
				<label
					className={`label gap-2 cursor-pointer ${
						selectedGender === "male" ? "selected" : ""
					}`}
				>
					<span className="label-text text-white">Male</span>
					<input
						type="checkbox"
						className="checkbox border-slate-900 bg-white"
						checked={selectedGender === "male"}
						onChange={() => onCheckboxClick("male")}
					/>
				</label>
			</div>
			<div className="form-control">
				<label
					className={`label gap-2 cursor-pointer ${
						selectedGender === "male" ? "selected" : ""
					}`}
				>
					<span className="label-text text-white">Female</span>
					<input
						type="checkbox"
						className="checkbox border-slate-900 bg-white"
						checked={selectedGender === "female"}
						onChange={() => onCheckboxClick("female")}
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
