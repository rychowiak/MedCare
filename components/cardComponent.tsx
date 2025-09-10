import * as React from "react";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

interface componentCard {
    title?: "title1"
    content?: "Content1"
}

const CardComponent = (props: componentCard) => {
    const {title, content} = props
    return (
        <Card className="border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300">
            <CardHeader className="pb-2">
                <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4">
                    <User className="h-6 w-6 text-emerald-400"></User>
                </div>
                <CardTitle>{title}</CardTitle>
                <CardAction></CardAction>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    {content}
                </p>
            </CardContent>
        </Card>
    );
}

export default CardComponent;