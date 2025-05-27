import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactForm() {
  return (
    <Card className="shadow-xs border border-[#ECECECEE] w-[90%]">
      <CardContent className="p-8">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input
                id="firstName"
                placeholder="John"
                className="border-[#ececec]"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="lastName"
                placeholder="Last Name*"
                className="border-[#ececec]"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Input
              id="email"
              type="email"
              placeholder="Email*"
              className="border-[#ececec]"
              required
            />
          </div>

          <div className="space-y-2">
            <Input
              id="phone"
              type="tel"
              placeholder="Phone Number*"
              className="border-[#ececec]"
              required
            />
          </div>

          <div className="space-y-2">
            <Textarea
              id="message"
              placeholder="Your message..."
              className="border-[#ececec] min-h-[120px] resize-none"
              rows={5}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#F57D0D] hover:bg-[#f57d0db9] text-white py-3 text-lg font-semibold rounded-[12px] p-3" 
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
