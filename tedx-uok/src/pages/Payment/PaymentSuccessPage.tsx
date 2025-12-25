import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import Card from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

const PaymentSuccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <Card className="w-full max-w-md p-8 text-center bg-[#0a0a0a] border-[#1F1F1F]">
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center">
                        <Check className="w-8 h-8 text-green-500" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>

                <p className="text-gray-400 mb-8 leading-relaxed">
                    Thank you for your purchase. Your registration has been confirmed and a specific receipt has been emailed to you.
                </p>

                <div className="space-y-4">
                    <Button
                        variant="outline"
                        className="w-full rounded-full border-gray-700 text-white hover:bg-gray-800 hover:text-white"
                        onClick={() => window.print()}
                    >
                        Download Invoice
                    </Button>

                    <Button
                        variant="tedxPrimary"
                        className="w-full"
                        onClick={() => navigate("/")}
                    >
                        Return to Home
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default PaymentSuccessPage;
