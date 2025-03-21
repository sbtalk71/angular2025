import { WebTracerProvider } from "@opentelemetry/sdk-trace-web";
import { ConsoleSpanExporter, SimpleSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { FetchInstrumentation } from "@opentelemetry/instrumentation-fetch";
import { XMLHttpRequestInstrumentation } from "@opentelemetry/instrumentation-xml-http-request";
import { UserInteractionInstrumentation } from "@opentelemetry/instrumentation-user-interaction";

// Define OpenTelemetry Tracer Provider
//const provider = new WebTracerProvider();

// Define an OTLP exporter (change the URL based on your backend)
const otlpExporter = new OTLPTraceExporter({
  url: "http://localhost:4318/v1/traces",  // Replace with your OTEL collector URL
});

// Configure the span processor to export traces
const provider = new WebTracerProvider({
    spanProcessors: [new SimpleSpanProcessor(new ConsoleSpanExporter()),new SimpleSpanProcessor(otlpExporter)]
  });
  
//provider.addSpanProcessor(new SimpleSpanProcessor(otlpExporter));
//provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

// Register the provider
provider.register();

// Enable automatic instrumentation for HTTP and UI interactions
registerInstrumentations({
  instrumentations: [
    new FetchInstrumentation(),
    new XMLHttpRequestInstrumentation(),
    new UserInteractionInstrumentation(),
  ],
});

console.log("OpenTelemetry initialized successfully!");
