import { useState } from "react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Search, Filter, Clock, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function CountrySelection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const countries = [
    { name: "United States", flag: "🇺🇸", types: ["Tourist", "Work", "Student"], time: "2-4 weeks", cost: "$299", region: "North America" },
    { name: "United Kingdom", flag: "🇬🇧", types: ["Tourist", "Work", "Student"], time: "3-6 weeks", cost: "$349", region: "Europe" },
    { name: "Canada", flag: "🇨🇦", types: ["Tourist", "Work", "Student"], time: "2-8 weeks", cost: "$279", region: "North America" },
    { name: "Australia", flag: "🇦🇺", types: ["Tourist", "Work", "Student"], time: "4-8 weeks", cost: "$399", region: "Oceania" },
    { name: "Germany", flag: "🇩🇪", types: ["Tourist", "Work", "Student"], time: "2-6 weeks", cost: "$329", region: "Europe" },
    { name: "France", flag: "🇫🇷", types: ["Tourist", "Work", "Business"], time: "2-4 weeks", cost: "$299", region: "Europe" },
    { name: "Japan", flag: "🇯🇵", types: ["Tourist", "Work", "Business"], time: "1-3 weeks", cost: "$249", region: "Asia" },
    { name: "Singapore", flag: "🇸🇬", types: ["Tourist", "Work", "Business"], time: "1-2 weeks", cost: "$199", region: "Asia" },
    { name: "Switzerland", flag: "🇨🇭", types: ["Tourist", "Work", "Student"], time: "3-5 weeks", cost: "$379", region: "Europe" },
    { name: "Netherlands", flag: "🇳🇱", types: ["Tourist", "Work", "Student"], time: "2-4 weeks", cost: "$299", region: "Europe" },
    { name: "New Zealand", flag: "🇳🇿", types: ["Tourist", "Work", "Student"], time: "3-6 weeks", cost: "$349", region: "Oceania" },
    { name: "South Korea", flag: "🇰🇷", types: ["Tourist", "Work", "Student"], time: "2-4 weeks", cost: "$279", region: "Asia" },
    { name: "Spain", flag: "🇪🇸", types: ["Tourist", "Work", "Student"], time: "2-5 weeks", cost: "$299", region: "Europe" },
    { name: "Italy", flag: "🇮🇹", types: ["Tourist", "Work", "Student"], time: "3-6 weeks", cost: "$329", region: "Europe" },
    { name: "United Arab Emirates", flag: "🇦🇪", types: ["Tourist", "Work", "Business"], time: "1-2 weeks", cost: "$249", region: "Middle East" },
    { name: "Sweden", flag: "🇸🇪", types: ["Tourist", "Work", "Student"], time: "2-4 weeks", cost: "$299", region: "Europe" },
  ];

  const filters = [
    { id: "all", label: "All Visas" },
    { id: "Tourist", label: "Tourist" },
    { id: "Work", label: "Work" },
    { id: "Student", label: "Student" },
    { id: "Business", label: "Business" },
  ];

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === "all" || country.types.includes(selectedFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-['Inter']">
      <Navigation />

      <div className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-semibold text-[#0F172A] mb-4">
              Select Your Destination
            </h1>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Choose from 150+ countries and start your visa application with AI-powered guidance
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="max-w-3xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
                <Input
                  type="text"
                  placeholder="Search for a country..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 rounded-2xl border-2 bg-white"
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-[#64748B]">
                <Filter className="w-4 h-4" />
                <span>Filter by:</span>
              </div>
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? "default" : "outline"}
                  className={`rounded-xl ${
                    selectedFilter === filter.id
                      ? "bg-[#1E40AF] text-white"
                      : "bg-white text-[#64748B] hover:bg-[#F1F5F9]"
                  }`}
                  onClick={() => setSelectedFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-[#64748B]">
              Showing {filteredCountries.length} {filteredCountries.length === 1 ? 'country' : 'countries'}
            </p>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCountries.map((country, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all cursor-pointer border-2 rounded-2xl group">
                <div className="text-6xl mb-4">{country.flag}</div>
                
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                  {country.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {country.types.map((type, typeIndex) => (
                    <Badge key={typeIndex} variant="secondary" className="bg-[#F1F5F9] text-[#64748B] rounded-lg">
                      {type}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-[#64748B]">
                      <Clock className="w-4 h-4 mr-1.5" />
                      Processing
                    </span>
                    <span className="text-[#0F172A] font-medium">{country.time}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#64748B]">Starting from</span>
                    <span className="text-[#1E40AF] font-semibold text-lg">{country.cost}</span>
                  </div>
                </div>

                <Link to="/ai-assistant">
                  <Button className="w-full bg-[#F1F5F9] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white rounded-xl group-hover:bg-[#1E40AF] group-hover:text-white transition-colors">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {filteredCountries.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-2">
                No countries found
              </h3>
              <p className="text-[#64748B]">
                Try adjusting your search or filters
              </p>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-20 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our AI assistant can help you determine which visa type and country best suits your needs based on your profile and travel plans.
            </p>
            <Link to="/ai-assistant">
              <Button size="lg" className="bg-white text-[#4F46E5] hover:bg-white/90 rounded-2xl px-8">
                Talk to AI Assistant
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
