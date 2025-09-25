import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Calculator, DollarSign, Percent, Calendar } from "lucide-react";

const EMICalculator = ({ vehiclePrice = 100000, className = "" }) => {
  const [loanAmount, setLoanAmount] = useState(vehiclePrice * 0.9); // 90% of vehicle price
  const [downPayment, setDownPayment] = useState(vehiclePrice * 0.1); // 10% down payment
  const [interestRate, setInterestRate] = useState(9.5);
  const [loanTenure, setLoanTenure] = useState(3); // years
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setLoanAmount(vehiclePrice - downPayment);
  }, [vehiclePrice, downPayment]);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  const calculateEMI = () => {
    if (loanAmount && interestRate && loanTenure) {
      const monthlyRate = interestRate / 12 / 100;
      const numberOfMonths = loanTenure * 12;
      
      const emiAmount = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) / 
                       (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
      
      const totalAmountPayable = emiAmount * numberOfMonths;
      const totalInterestPayable = totalAmountPayable - loanAmount;
      
      setEmi(Math.round(emiAmount));
      setTotalInterest(Math.round(totalInterestPayable));
      setTotalAmount(Math.round(totalAmountPayable));
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-semibold text-card-foreground">EMI Calculator</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Vehicle Price
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="number"
                value={vehiclePrice}
                readOnly
                className="pl-10 bg-muted"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Down Payment
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Interest Rate (% per annum)
            </label>
            <div className="relative">
              <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Loan Tenure (Years)
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="number"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          <div className="bg-gradient-primary rounded-lg p-4 text-center">
            <div className="text-primary-foreground/80 text-sm mb-1">Monthly EMI</div>
            <div className="text-2xl font-bold text-primary-foreground">
              {formatCurrency(emi)}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary rounded-lg p-4 text-center">
              <div className="text-secondary-foreground/80 text-sm mb-1">Loan Amount</div>
              <div className="text-lg font-semibold text-secondary-foreground">
                {formatCurrency(loanAmount)}
              </div>
            </div>

            <div className="bg-secondary rounded-lg p-4 text-center">
              <div className="text-secondary-foreground/80 text-sm mb-1">Total Interest</div>
              <div className="text-lg font-semibold text-secondary-foreground">
                {formatCurrency(totalInterest)}
              </div>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent rounded-lg p-4 text-center">
            <div className="text-accent text-sm mb-1">Total Amount Payable</div>
            <div className="text-xl font-bold text-accent">
              {formatCurrency(totalAmount + downPayment)}
            </div>
          </div>

          <div className="text-xs text-muted-foreground text-center">
            * EMI calculations are approximate and may vary based on bank terms and conditions
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EMICalculator;