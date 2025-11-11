import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionCard() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="w-full">
        <AccordionTrigger className="w-full">
          What is the purpose of this website?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Welcome to our website, where we aim to provide you with the best
            products and services. Our purpose is to make your life easier, by
            offering you a wide range of products that you can use to improve
            your daily life. We strive to provide you with the best quality
            products, at the best prices, and with the best customer service. We
            believe that our website is the best place for you to find what you
            need, and we are committed to making sure that you have a great
            experience while shopping with us.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do i contact support?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            If you have any questions or need any help, please don't hesitate to
            contact us. We have a dedicated team of customer support specialists
            who are ready to assist you with any questions or concerns you may
            have. You can reach us by phone, email, or through our website's
            contact form. We are available 24/7 to help you with any issue you
            may have.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do I find the best products?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Finding the best products can be a challenge, but we are here to
            help. We have a team of experts who carefully curate our products to
            ensure that they are of the highest quality and meet our high
            standards. We also have a detailed product description, customer
            reviews, and product ratings to help you make an informed decision.
            If you still have any questions, feel free to contact us and we will
            be happy to help you.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Can I return a product?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Yes, you can return a product. We want you to be completely
            satisfied with your purchase, and if for any reason you are not, you
            can return it to us within 30 days of delivery. Please see our
            return policy for more details.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          Do you offer international shipping?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Yes, we offer international shipping. We understand that our
            customers are located all over the world, and we want to make sure
            that we can reach them. We have a network of shipping partners that
            allow us to ship to almost any country in the world. Please see our
            shipping policy for more details.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>How can I track my order?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Once your order has shipped, you will receive an email with tracking
            information. You can use this information to track your order and
            see when it will arrive. If you have any questions or concerns about
            your order, please don't hesitate to contact us.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
