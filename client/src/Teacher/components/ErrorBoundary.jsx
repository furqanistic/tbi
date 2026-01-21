// File: client/src/Teacher/components/ErrorBoundary.jsx
import { Component } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    // Log to error reporting service in production
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="flex flex-col items-center justify-center min-h-100 p-6 text-center">
          <div className="p-4 bg-destructive/10 rounded-full mb-4">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>

          <h2 className="text-lg font-semibold text-foreground mb-2">
            {this.props.title || "Something went wrong"}
          </h2>

          <p className="text-sm text-muted-foreground mb-6 max-w-md">
            {this.props.description ||
              "We encountered an unexpected error. Please try refreshing the page or go back to the dashboard."}
          </p>

          {/* Show error details in development */}
          {import.meta.env.DEV && this.state.error && (
            <details className="mb-6 text-left w-full max-w-lg">
              <summary className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">
                Error Details (Dev Only)
              </summary>
              <pre className="mt-2 p-3 bg-muted/50 rounded-lg text-xs overflow-auto max-h-40 text-destructive">
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={this.handleReset}
              className="gap-2"
            >
              <RefreshCcw className="w-4 h-4" />
              Try Again
            </Button>

            <Button asChild className="gap-2">
              <Link to="/teacher">
                <Home className="w-4 h-4" />
                Go to Dashboard
              </Link>
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Wrapper for sections - lighter error UI
export function SectionErrorBoundary({ children, sectionName = "section" }) {
  return (
    <ErrorBoundary
      title={`Error loading ${sectionName}`}
      description={`We couldn't load this ${sectionName}. Please try refreshing.`}
    >
      {children}
    </ErrorBoundary>
  );
}

// HOC for wrapping components
export function withErrorBoundary(WrappedComponent, errorProps = {}) {
  return function WithErrorBoundaryWrapper(props) {
    return (
      <ErrorBoundary {...errorProps}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
}

export default ErrorBoundary;
