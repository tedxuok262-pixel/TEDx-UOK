import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import Card from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

const PaymentFailPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <Card className="w-full max-w-md p-8 text-center bg-[#0a0a0a] border-[#1F1F1F]">
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center">
                        <X className="w-8 h-8 text-[#EB0028]" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-white mb-4">Payment Failed</h1>

                <p className="text-gray-400 mb-8 leading-relaxed">
                    We couldn't process your payment. Please check your payment details and try again.
                </p>

                <div className="space-y-4">
                    <Button
                        variant="tedxPrimary"
                        className="w-full"
                        onClick={() => navigate("/register")}
                    >
                        Try Again
                    </Button>

                    <Button
                        variant="outline"
                        className="w-full rounded-full border-gray-700 text-white hover:bg-gray-800 hover:text-white"
                        onClick={() => navigate("/contact")}
                    >
                        Contact Support
                    </Button>

                    <Button
                        variant="outline"
                        className="w-full rounded-full border-gray-700 text-white hover:bg-gray-800 hover:text-white"
                        onClick={() => navigate("/")}
                    >
                        Return to Home
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default PaymentFailPage;
