export default function UserInput({input, onUserInputChange}) {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required onChange={(event) =>
                    onUserInputChange("initialInvestment", event.target.value)
                }
                    value={input.initialInvestment}
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required onChange={(event) =>
                    onUserInputChange("annualInvestment", event.target.value)
                }
                    value={input.annualInvestment}
                />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required onChange={(event) =>
                    onUserInputChange("expectedReturn", event.target.value)
                }
                    value={input.expectedReturn}
                />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required onChange={(event) =>
                    onUserInputChange("duration", event.target.value)
                }
                    value={input.duration}
                />
            </p>
        </div>
    </section>;
}